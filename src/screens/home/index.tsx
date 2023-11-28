import { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import Todo from '../../components/todo';

export default function Home() {

  const [arrayTotal, setTotal] = useState<string[]>([])
  const [arrayCriadas, setArrayCriadas] = useState<string[]>([])
  const [arrayConcluida, setArrayConcluida] = useState<string[]>([])

  const [input, setInput] = useState('')

  function handleAdd() {
    if (!arrayTotal.includes(input) && input.length !== 0) {
      setTotal([...arrayTotal, input])
      setArrayCriadas([...arrayCriadas, input])
      setInput('')
    }
  }

  function handleToFinish(item: string) {
    if (!arrayConcluida.includes(item)) {
      setArrayCriadas(arrayCriadas.filter(e => e !== item))
      setArrayConcluida([...arrayConcluida, item])
    }else {
      setArrayConcluida(arrayConcluida.filter(e => e !== item))
      setArrayCriadas([...arrayCriadas, item])
    }
  }

  function handleRemove(item: string) {
    if (arrayCriadas.includes(item)) {
      setArrayCriadas(arrayCriadas.filter(e => e !== item))
    }else {
      setArrayConcluida(arrayConcluida.filter(e => e !== item))
    }
    setTotal(arrayTotal.filter(e => e !== item))
  }

  return (
    <View style={{width: '100%', height: 173, backgroundColor: '#0D0D0D'}}>
      
      <View style={{flexDirection: 'row', marginTop: 70, justifyContent: 'center'}}>
        <Text style={{color: '#4EA8DE', fontSize: 36, fontWeight: 'bold'}}>to</Text>
        <Text style={{color: '#5E60CE', fontSize: 36, fontWeight: 'bold'}}>do</Text>
      </View>

      <View style={{width: '100%', height: 639, backgroundColor: '#1A1A1A', marginTop: 173, position: 'absolute'}}>
        <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'}/>

      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: -30}}>
        <TextInput value={input} style={{width: 271, height: 54, backgroundColor: '#333333', borderRadius: 5 , marginRight: 4, paddingLeft: 20, color: 'white'}} placeholder='Adicione uma nova tarefa' placeholderTextColor={'#808080'} onChangeText={(text) => setInput(text)}/>
        <TouchableOpacity onPress={handleAdd} style={{alignItems: 'center', justifyContent: 'center', width: 52, height: 54, backgroundColor: '#1E6F9F', borderRadius: 10}}><Text style={{color: '#FFFFFF', fontSize: 24}}>+</Text></TouchableOpacity>
      </View>

      <View style={{marginTop: 28, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30, marginBottom: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#4EA8DE'}}>Criadas</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 5, backgroundColor: '#333333', paddingLeft: 12, paddingBottom: 5, paddingRight: 12, paddingTop: 5, borderRadius: 20}}>{arrayCriadas.length}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#8284FA'}}>Concluídas</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#FFFFFF', marginLeft: 5, backgroundColor: '#333333', paddingLeft: 12, paddingBottom: 5, paddingRight: 12, paddingTop: 5, borderRadius: 20}}>{arrayConcluida.length}</Text>
        </View>
      </View>

      <FlatList data={arrayTotal} keyExtractor={key => key} renderItem={({item}) => (
        <Todo text={item} ClickFinish={(item) => handleToFinish(item)} ClickRemove={(item) => handleRemove(item)} onFinish={arrayConcluida.includes(item) ? true : false}/>
      )} ListEmptyComponent={() => (
        <View>
        <Text style={{color: '#808080', fontSize: 24, fontWeight: 'bold' ,textAlign: 'center', marginTop: 150}}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={{color: '#808080', fontSize: 16, textAlign: 'center', marginTop: 5}}>
        Crie tarefas e organize seus itens a fazer
      </Text>
      </View>
    )} showsVerticalScrollIndicator={false}/>
    </View>

    </View>
  );
}
