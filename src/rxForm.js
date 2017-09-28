import React from 'react';
import { List, InputItem, WhiteSpace, TextareaItem, Button, WingBlank, Modal, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';

class rxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modalSucess: false,
          modalError: false,
        };
      }
    
    TDAPP = window.TDAPP || { };
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
    showModal = key => (e) => {
        e.preventDefault();
        this.setState({
          [key]: true,
        });
      }
    submit = (e) => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            if (error) {
                const result = [].concat.apply(...Object.keys(error).map((key) => {
                    return [...error[key].errors];
                  }));
                Toast.info(result.map((elem) => {
                    return elem.message;
                }).join('，'));
            }
            else {
                this.showModal('modalSucess')(e);
                this.TDAPP.onEvent("提交申请",value.phone,value);
                this.props.form.resetFields();
            }});
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
          <WingBlank>
            <WhiteSpace />
            <List renderHeader={() => '请输入贷款信息'}>
            <InputItem
              clear
              placeholder="请输入姓名"
              {...getFieldProps('name', {
                rules: [
                    {
                    required: true,
                    message: '姓名必填',
                    },
                ],
                validateTrigger: null,
                })}
              ><span style={{ color: 'red' }}>*</span>姓名</InputItem>
              <InputItem
                {...getFieldProps('id')}
                type="bankCard"
                clear
                placeholder="8888 8888 8888"
              >身份证</InputItem>
              <InputItem
                {...getFieldProps('phone', {
                    rules: [
                        {
                        required: true,
                        message: '手机号必填',
                        },
                    ],
                })}
                type="phone"
                clear
                placeholder="186 1234 1234"
              ><span style={{ color: 'red' }}>*</span>手机号码</InputItem>
            </List>
            <WhiteSpace />
            <List renderHeader={() => '借款概要'}>
            <TextareaItem
                {...getFieldProps('note')}
                placeholder="请输入借款概要"
                autoHeight
                labelNumber={5}
                rows={7}
            />
            </List>
            <WhiteSpace />
            <Button className="btn" type="primary"  onClick={this.submit}>提交</Button>
            <Modal
                title="提交成功"
                transparent
                maskClosable={false}
                visible={this.state.modalSucess}
                onClose={this.onClose('modalSucess')}
                footer={[{ text: '确定', onPress: () => { this.onClose('modalSucess')(); } }]}
            >
                感谢您的信任，我们的服务人员会尽快和您联系。<br />
            </Modal>
            <Modal
                title="表单错误"
                transparent
                maskClosable={false}
                visible={this.state.modalError}
                onClose={this.onClose('modalError')}
                footer={[{ text: '确定', onPress: () => { this.onClose('modalError')(); } }]}
            >
                感谢您的信任，我们的服务人员会尽快和您联系。<br />
            </Modal>
        </WingBlank>
        );
    }
}

const rcForm = createForm()(rxForm);

export default rcForm;