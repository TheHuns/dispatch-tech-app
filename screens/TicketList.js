import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getTickets } from "../store/actions/tickets";

export default function TicketList() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.userId);
  const tickets = useSelector(state => state.tickets.tickets);
  console.log(user + "ticketList");

  // Pull list of tickets from server
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const Ticket = ({name, address, service}) => {
        return (
          <View style={styles.ticketContainer}>
            <Text style={styles.ticketName}>{name}</Text>
            <Text style={styles.ticketAddress}>{address}</Text>
            <Text style={styles.ticketService}>{service}</Text>
            <View style={styles.action}>
              <Button title="Completed" style={styles.button}></Button>
              <Button
                title="Delete"
                color="orange"
                style={styles.button}
              ></Button>
            </View>
          </View>
        )

  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={tickets} renderItem={({item}) => <Ticket name={item.name} address={item.autoAddress} service={item.servicerequested} />   } keyExtractor={ticket => ticket._id}></FlatList>
      
    </View>
  );
}

TicketList.navigationOptions = {
  headerTitle: "Tickets"
};

const styles = StyleSheet.create({
  ticketContainer: {
    marginLeft: "5%",
    width: "90%",
    padding: 15,
    textAlign: "center",
    marginTop: 10,
    borderColor: "#8b8b8b",
    borderWidth: 1,
    borderRadius: 3
  },
  ticketName: {
    fontSize: 16
  },
  ticketAddress: {
    fontWeight: "bold",
    fontSize: 20
  },
  action: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 15,
    justifyContent: "space-between"
  },
  button: {
    margin: 5,
    flex: 1
  }
});
