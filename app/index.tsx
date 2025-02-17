import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Header />
      
      {/* Scientific Thinking */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: "purple", fontSize: 16, fontWeight: "bold" }}>Scientific Thinking</Text>
        <TouchableOpacity onPress={() => router.push("/explore")}>
          <Card title="The Teacher and Barber" buttonText="Play" cardImage={require("../assets/images/teacher.png")} />
        </TouchableOpacity>
      </View>

      {/* Class Memories */}
      <SectionHeader title="Class Memories" />
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Card title="Water way of Transport" buttonText="Watch Video" cardImage={require("../assets/images/class_water.png")}  />
        <Card title="Father's Day Celebration" buttonText="See Post" cardImage={require("../assets/images/class_father.png")}   />
      </View>

      {/* Explore */}
      <SectionHeader title="Explore" />
      <TouchableOpacity onPress={() => router.push("/explore")}>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Card title="The Brave Little Explorer" cardImage={require("../assets/images/brave.png")} />
          <Card title="Space" cardImage={require("../assets/images/turn.png")} />
      </View>
      </TouchableOpacity>

      {/* Content */}
      <SectionHeader title="Content" />
      <TouchableOpacity onPress={() => router.push("/content")}>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        
          <Card title="Mathematics" color="yellow" cardImage={require("../assets/images/mathematic.png")}  />
         
      </View>
      </TouchableOpacity> 
    </ScrollView>
    <Footer/>
    </View>
  );
}
