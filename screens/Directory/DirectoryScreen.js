import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, Card, Button, Icon, SearchBar } from "@rneui/themed";
import { seed } from "./testSeed";

const DirectoryScreen = ({ navigation }) => {
  const [users, setUsers] = useState(seed.results);
  const [filterUsers, setFilterUsers] = useState(seed.results);
  const [search, setSearch] = useState("");


  const getUsers = async () => {
    try {
      await fetch("https://randomuser.me/api/?page=1&results=10&seed=abc", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error with the login");
            throw new Error("Error with the login");
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setUsers(json.results);
          setFilterUsers(json.results);
        });
    } catch (error) {
      console.log("error get users", error);
      alert(error);
    }
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const updateSearch = (search) => {
    setSearch(search);
    if (search.length > 2) {
      const filter = users.filter((user) => {
        if (
          user.name.first.toLowerCase().includes(search.toLowerCase()) ||
          user.name.last.toLowerCase().includes(search.toLowerCase())
        ) {
          return user;
        }
      });

      setFilterUsers(filter);
    } else {
      setFilterUsers(users);
    }
  };
  return (
    <ScrollView>
      {/* <Text>IBCC shepherds</Text>
      <Text>IBCC Members</Text> */}
      <SearchBar
        placeholder="Search by name or last name..."
        onChangeText={updateSearch}
        value={search}
      />
      {filterUsers.length > 0 &&
        filterUsers.map((user, index) => {
          return (
            <Card key={index}>
              <Card.Title>
                {user.name.first} {user.name.last}
              </Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0 }}
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
              />
              <View>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>email:</Text>
                  <Text style={{ marginBottom: 10 }}>{user.email}</Text>
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>location:</Text>
                  <Text style={{ marginBottom: 10 }}>
                    {user.location.street.number} {user.location.street.name}
                  </Text>
                </Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>phone:</Text>
                  <Text style={{ marginBottom: 10 }}>{user.phone}</Text>
                </Text>
              </View>
            </Card>
          );
        })}
    </ScrollView>
  );
};

export default DirectoryScreen;
