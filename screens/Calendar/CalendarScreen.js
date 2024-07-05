import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { apiUrl } from "../../enviroment";
import { Modal } from "../../components/Shared";

export default function CalendarScreen() {
  const apiRoute = `${apiUrl}/users`;
  const [users, setUsers] = useState([]);
  const [birthdays, setBirthdays] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [usersToShow, setUsersToShow] = useState([]);

  const getUsers = async () => {
    try {
      await fetch(apiRoute, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error with get users");
            throw new Error("Error with get users");
          } else {
            return response.json();
          }
        })
        .then((json) => {
          setUsers(json?.data);
        });
    } catch (error) {
      console.log("error get users", error);
      alert(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const myMarkDates = {};
    if (users?.length > 0) {
      users.map((user) => {
        const date = user?.birthday.split("T").shift();
        const dateSlice = date.slice(4);
        const finalDate = "2024".concat(dateSlice);
        myMarkDates[finalDate] = { marked: true, dotColor: "red" };
      });
      setBirthdays(myMarkDates);
    }
  }, [users]);

  const handlePressDate = (day) => {
    const date = day.dateString.slice(4);
    const birthdayUsers = users.filter((user) => {
      return user.birthday.includes(date);
    });

    if (birthdayUsers && birthdayUsers?.length > 0) {
      setUsersToShow(birthdayUsers);
      setShowModal(!showModal);
    }
  };

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <View>
      {/* <Button title="GET USERS" onPress={getUsers} /> */}

      <Calendar
        onDayPress={handlePressDate}
        maxDate="2024-12-31"
        minDate="2024-01-01"
        // markedDates={{
        //   "2024-07-13": { selected: true, marked: true, selectedColor: "blue" },
        //   "2024-07-11": { marked: true },
        //   "2024-07-12": { marked: true, dotColor: "red", activeOpacity: 0 },
        //   "2024-07-15": { disabled: true, disableTouchEvent: true },
        // }}
        markedDates={birthdays}
        style={{
          // borderWidth: 1,
          // borderColor: "gray",
          height: "95%",
        }}
        theme={{
          // arrowColor: "black",
          "stylesheet.day.basic": {
            base: {
              height: 100,
              width: 45,
              alignItems: "center",
            },
          },
        }}
      />
      <Modal show={showModal} close={handleShowModal}>
        <View>
          {usersToShow?.length > 0 &&
            usersToShow.map((user, index) => {
              return (
                <Text key={index}>
                  {user.first_name} {user.last_name}
                </Text>
              );
            })}
        </View>
      </Modal>
    </View>
  );
}
