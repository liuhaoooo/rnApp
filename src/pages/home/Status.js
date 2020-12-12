import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import Form from 'react-native-validator'

export default Status = () => {
  const [dynamicValidateForm, setdynamicValidateForm] = useState(
    {
      name: '',
    }
  )
  // let FormVal = useRef(null)
  const [FormVal, setFormVal] = useState(null)
  const changeText = (type, text) => {
    let obj = { dynamicValidateForm };
    obj[type] = text;
    setdynamicValidateForm(obj)
  }
  const submit = () => {
    FormVal.validate(res => {
      if (!res) {
        alert("submit succs")
      }
    })
  }
  return (
    <View style={{ marginTop: 30 }}>
      {/* <Form.elForm
        model={dynamicValidateForm}
        ref={ref => setFormVal(ref)}>
        <Form.elFormItem
          prop="phone"
          rules={[
            { required: true, message: '不能为空' },
            { pattern: /^\d{6}$/, message: '请输入6位数' }
          ]}
        >
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value={dynamicValidateForm.phone}
            placeholder="phone"
            onChangeText={text => changeText('phone', text)}
          />
        </Form.elFormItem>
      </Form.elForm>
      <Button onPress={() => submit()} title="提交"></Button> */}
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  normalBtn: {
    backgroundColor: "#409eff",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    borderRadius: 5
  },
  normalBtnTxt: {
    color: '#fff'
  },
  disabledBtn: {
    backgroundColor: "#dcdfe6"
  },
  disabledBtnTxt: {
    color: "#ccc"
  }
});
