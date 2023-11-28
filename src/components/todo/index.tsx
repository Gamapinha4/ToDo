import { View, TouchableOpacity, Text } from 'react-native'

type props = {
  text: String
  ClickFinish: (text: any) => void
  ClickRemove: (text: any) => void
  onFinish: boolean;
}

export default function Todo({text, ClickFinish , ClickRemove, onFinish}: props) {
  return(
    <View style={{width: 327, height: 64, backgroundColor: '#262626', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', marginBottom: 10}}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20, justifyContent: 'space-between'}}>
        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => ClickFinish(text)}><View style={{width: 24, height: 24, backgroundColor: onFinish ? '#5E60CE' : '#333333', borderRadius: 100, borderColor: onFinish ? '#5E60CE' : '#4EA8DE', borderWidth: 2, marginRight: 20}}></View></TouchableOpacity>
        <View style={{flex: 1, justifyContent: text.length <= 24 ? 'center' : 'flex-start'}}><Text style={{fontSize: 14, color: onFinish ? '#808080' : '#F2F2F2', textDecorationLine: onFinish ? 'line-through' : 'none'}}>{text}</Text></View>
        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => ClickRemove(text)}><Text style={{fontSize: 14, color: '#E25858', fontWeight: 'bold', marginLeft: 20}}>Delete</Text></TouchableOpacity>
      </View>
    </View>
  )
};