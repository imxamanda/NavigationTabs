import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import Api from '../../sevices/Api';


const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      Api.get('users')
        .then((response) => {
          setUsers(response.data.users)
        }).catch((error) => {
          console.log(error)
        })
    }, [])

  return (
    <>
        <ScrollView>
        {users.map((item) => (
             <Card key={item.id} style={styles.card}>
                <Card.Title
                    title={item.firstName}
                    subtitle={item.username}
                    left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                />
            </Card>
        ))}
        </ScrollView>
    </>
    


  )
}

export default Users

const styles = StyleSheet.create({
  card: {
    marginBottom: 25 
  }
})