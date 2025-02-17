import { View, Text, Image } from "react-native";
//import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>Home Buddy</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <span  style={{height: '40px', width: '40px', backgroundColor: '#E8EAFF', borderRadius: '50%', display: 'inline-block', justifyContent: 'center', alignItems: 'center', display: 'flex'}}><Feather name="mic" size={24} color="black"/></span>
        <span  style={{height: '40px', width: '40px', backgroundColor: '#E8EAFF', borderRadius: '50%', display: 'inline-block', justifyContent: 'center', alignItems: 'center', display: 'flex'}}><Feather name="bell" size={24} color="black" /></span>
        <span  style={{height: '40px', width: '40px', backgroundColor: '#E8EAFF', borderRadius: '50%', display: 'inline-block', justifyContent: 'center', alignItems: 'center', display: 'flex'}}><Ionicons name="chatbubble-outline" size={24} color="black" /></span>
      </View>
    </View>
  );
}
