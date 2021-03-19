import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: `https://i.pravatar.cc/150?u=${email}`}}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // POST and Update API
  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      // console.log('data before send', data);
      // IP ini alias untuk IP emulator, karena pakai localhost error
      axios.post('http://10.0.2.2:3004/users', data).then((res) => {
        console.log('res', res);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log('res update : ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        });
    }
  }; // END POST and Update API

  // GET API
  const getData = () => {
    axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res: ', res);
      setUsers(res.data);
    });
  }; // END GET API

  // UPDATE API
  const selectItem = (item) => {
    console.log('Select item : ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  }; // END UPDATE API

  // DELETE API
  const deleteItem = (item) => {
    // console.log('delete', item);
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) => {
      console.log('res delete : ', res);
      getData();
    });
  }; // END DELETE API

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text> Masukan Anggota </Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          // harus pakai key atau unique yg didapat dari id
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin menghapus user ini?', [
                {text: 'Tidak', onPress: () => console.log('button tidak')},
                {text: 'Ya', onPress: () => deleteItem(user)},
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80 / 2},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 16, fontWeight: 'bold'},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
