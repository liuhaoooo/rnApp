// import React, { useContext, useEffect, useState, useRef } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   TextInput,
// } from 'react-native';
// import Form from 'react-native-validator'

// export default Status = () => {
//   const [dynamicValidateForm, setdynamicValidateForm] = useState(
//     {
//       name: '',
//     }
//   )
//   const [FormVal, setFormVal] = useState(null)
//   const changeText = (type, text) => {
//     let obj = { dynamicValidateForm };
//     obj[type] = text;
//     setdynamicValidateForm(obj)
//   }
//   const submit = () => {
//     FormVal.validate(res => {
//       if (!res) {
//         alert("submit succs")
//       }
//     })
//   }
//   return (
//     <View style={{ marginTop: 30 }}>
//       <Form.elForm
//         model={dynamicValidateForm}
//         ref={ref => setFormVal(ref)}>
//         <Form.elFormItem
//           prop="phone"
//           rules={[
//             { required: true, message: '不能为空' },
//             { pattern: /^\d{6}$/, message: '请输入6位数' }
//           ]}
//         >
//           <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//             value={dynamicValidateForm.phone}
//             placeholder="phone"
//             onChangeText={text => changeText('phone', text)}
//           />
//         </Form.elFormItem>
//       </Form.elForm>
//       <Button onPress={() => submit()} title="提交"></Button>
//     </View>
//   )

// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   normalBtn: {
//     backgroundColor: "#409eff",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 35,
//     borderRadius: 5
//   },
//   normalBtnTxt: {
//     color: '#fff'
//   },
//   disabledBtn: {
//     backgroundColor: "#dcdfe6"
//   },
//   disabledBtnTxt: {
//     color: "#ccc"
//   }
// });
import React from "react";
import Placeholder from "rn-placeholder";
import { StyleSheet, View } from "react-native";
 
const Title = hasTitle => {
  return hasTitle ? (
    <View style={styles.title}>
      <Placeholder.Line />
    </View>
  ) : null;
};
const Placeholders = props => {
  const { ParagraphLength, ParagraphType, hasTitle, ...others } = props;
  const PlaceholderItem = Placeholder[ParagraphType];
  const PlaceholderContent = [];
  for (let key = 0; key < ParagraphLength; key++) {
    PlaceholderContent.push(
      <View style={styles.item} key={`PlaceholderContentKey${key}`}>
        {Title(hasTitle)}
        <PlaceholderItem {...others} animate="fade" />
      </View>
    );
  }
  return <View>{PlaceholderContent}</View>;
};
 
const ImageContent = props => {
  const baseOption = {
    ParagraphLength: 5,
    ParagraphType: "ImageContent",
    hasTitle: false,
    size: 60,
    lineNumber: 3,
    lineSpacing: 12,
    lastLineWidth: "60%"
  };
  const options = { ...baseOption, ...props };
  const { isLoading, list } = props;
 
  if (isLoading) {
    return Placeholders(options);
  }
  return typeof list === "function" && list();
};
 
const Paragraph = props => {
  const baseOption = {
    lineNumber: 3,
    textSize: 16,
    lineSpacing: 5,
    width: "100%",
    lastLineWidth: "70%",
    firstLineWidth: "50%"
  };
 
  const options = { ...baseOption, ...props };
  const { isLoading, list } = props;
 
  if (isLoading) {
    return Placeholders(options);
  }
  return typeof list === "function" && list();
};
 
/* 导出
 ============================================================ */
// const ImagePlaceholder = Placeholder.connect(ImageContent);
// const ParagraphPlaceholder = Placeholder.connect(Paragraph);
// export { ImagePlaceholder, ParagraphPlaceholder };
 
/* 样式
 ============================================================ */
const styles = StyleSheet.create({
  title: {
    marginBottom: 12
  },
  item: {
    margin: 12
  }
})
export default Status = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <SectionItem title="最新消息" rightBtnText="更多" onPress={() => {}} />
      <ImagePlaceholder
        ParagraphLength={2}
        // isLoading={!this.alreadyLoad && loadStatus === LoadStatus.Loading}
        isLoading={false}
        list={this.renderTaskList}
      /> */}
    </View>
  );
}; 