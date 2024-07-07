import { history, Link, useRequest } from '@umijs/max';
import { Button, Col, Form, Input, message, Popover, Progress, Row, Select, Space } from 'antd';
import type { Store } from 'antd/es/form/interface';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { StateType } from './service';
import { fakeRegister } from './service';
import useStyles from './style.style';


const FormItem = Form.Item;
const { Option } = Select;

const passwordProgressMap: {
  ok: 'success';
  pass: 'normal';
  poor: 'exception';
} = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};
const Register: FC = () => {
  const { styles } = useStyles();
  const [count, setCount]: [number, any] = useState(0);
  const [open, setVisible]: [boolean, any] = useState(false);
  const [prefix, setPrefix]: [string, any] = useState('86');
  const [popover, setPopover]: [boolean, any] = useState(false);
  const confirmDirty = false;
  let interval: number | undefined;

  const passwordStatusMap = {
    ok: (
      <div className={styles.success}>
        <span>Strength: Strong</span>
      </div>
    ),
    pass: (
      <div className={styles.warning}>
        <span>Strength: Medium</span>
      </div>
    ),
    poor: (
      <div className={styles.error}>
        <span>Strength: Too short</span>
      </div>
    ),
  };

  const [form] = Form.useForm();
  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );
  const onGetCaptcha = () => {
    let counts = 59;
    setCount(counts);
    interval = window.setInterval(() => {
      counts -= 1;
      setCount(counts);
      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };
  const { loading: submitting, run: register } = useRequest<{
    data: StateType;
  }>(fakeRegister, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.status === 'ok') {
        message.success('registration success!');
        history.push({
          pathname: `/dashboard/analysis`,
          
        });
      }else if(data.status === 'error'){
        message.error('Registration failed');
      }


    },
  });
  const onFinish = (values: Store) => {
    register(values);
  };
  const checkConfirm = (_: any, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('The passwords you entered twice do not match!');
    }
    return promise.resolve();
  };
  const checkPassword = (_: any, value: string) => {
    const promise = Promise;
    // 没有值的情况
    if (!value) {
      setVisible(!!value);
      return promise.reject('Please enter password!');
    }
    // 有值的情况
    if (!open) {
      setVisible(!!value);
    }
    setPopover(!popover);
    if (value.length < 6) {
      return promise.reject('');
    }
    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  };
  const changePrefix = (value: string) => {
    setPrefix(value);
  };

  const handleSubmit = (values: API.LoginParams) => {
    axios.post(API_URL+"api/auth/signin", {
      username: values.username,
      password: values.password
    }).then((response) => {

      if(response.data.id){
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'login successful!',
        });
        message.success(defaultLoginSuccessMessage);

        //store data in local storage
        localStorage.setItem('user_id', response.data.username);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('roles', JSON.stringify(response.data.roles));

        const urlParams = new URL(window.location.href).searchParams;
        window.location.href = urlParams.get('redirect') || '/dashboard/analysis';
        return;

      }else{
          const defaultLoginFailureMessage = intl.formatMessage({
            id: 'pages.login.failure',
            defaultMessage: 'Login failed, please try again!',
          });
          message.error(defaultLoginFailureMessage);

      }
    });
  };
  
  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };
  return (
    <div className={styles.main}>
      <br></br>
      <br></br>
      <h3>Register</h3>
      <Form form={form} name="UserRegister" onFinish={onFinish}>
      <FormItem
          name="username"
          
        >
          <Input size="large" placeholder="Username" />
        </FormItem>
        <FormItem
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input the email address!',
            },
            {
              type: 'email',
              message: 'The email address format is incorrect!',
            },
          ]}
        >
          <Input size="large" placeholder="email" />
        </FormItem>
        <Popover
          getPopupContainer={(node) => {
            if (node && node.parentNode) {
              return node.parentNode as HTMLElement;
            }
            return node;
          }}
          content={
            open && (
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <span>Please enter at least 6 characters. Do not use a password that is easily guessed.</span>
                </div>
              </div>
            )
          }
          overlayStyle={{
            width: 240,
          }}
          placement="right"
          open={open}
        >
          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {
                validator: checkPassword,
              },
            ]}
          >
            <Input size="large" type="password" placeholder="Password" />
          </FormItem>
        </Popover>
        <FormItem
          name="confirm"
          rules={[
            {
              required: true,
              message: 'Confirm Password',
            },
            {
              validator: checkConfirm,
            },
          ]}
        >
          <Input size="large" type="password" placeholder="Confirm Password" />
        </FormItem>
        <FormItem>
          <div className={styles.footer}>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              <span>Register</span>
            </Button>
            <Link to="/user/login">
              <span>    Log in with an existing account</span>
            </Link>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};
export default Register;
