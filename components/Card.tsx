import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface CardProps {
  title: string;
  buttonText?: string;
  color?: string;
  cardImage?: any;
}

export default function Card({ title, buttonText, color = "#EDE7F6", cardImage }: CardProps) {
  const router = useRouter();
  return (
    <View style={{ backgroundColor: color, borderRadius: 15, padding: 20, margin: 5, flex: 1 }}>
      { title === 'Water way of Transport' && <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '15%', display: 'inline-block'}}>
        <Image source={cardImage} style={{ width: "64px", height: '64px', marginBottom: 10, borderRadius: '50px', objectFit: 'contain'}} />
        </div>
        <div style={{width: '85%', display: 'inline-block'}}>
        <div style={{paddingBottom: '20px'}}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>{title}</Text>
        </div>
        <div >
          {buttonText && (
            <TouchableOpacity style={{ borderRadius: 20, padding: 10, alignSelf: "flex-start", width: '20%' }}  onPress={() => router.push("/video")}>
              <Text style={{ color: "#FF6F00", fontWeight: "bold" }}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </div>
        </div>
      </div>
      }

{ title === "Father's Day Celebration" && <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '15%', display: 'inline-block'}}>
        <Image source={cardImage} style={{ width: "64px", height: '64px', marginBottom: 10, borderRadius: '50px', objectFit: 'contain'}} />
        </div>
        <div style={{width: '85%', display: 'inline-block'}}>
        <div style={{paddingBottom: '20px'}}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>{title}</Text>
        </div>
        <div >
          {buttonText && (
            <TouchableOpacity style={{ borderRadius: 20, padding: 10, alignSelf: "flex-start", width: '20%' }}  onPress={() => router.push("/memories")}>
              <Text style={{ color: "#FF6F00", fontWeight: "bold" }}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </div>
        </div>
      </div>
      }

{ title != "Water way of Transport" && title != "Father's Day Celebration" && <div><Image source={cardImage} style={{ width: "100%", height: 150, marginBottom: 10, borderRadius: 15, objectFit: 'contain'}} />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '90%', display: 'inline-block'}}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>{title}</Text>
        </div>
        <div style={{width: '10%', display: 'inline-block', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          {buttonText && (
            <TouchableOpacity style={{ backgroundColor: "#FF6F00", borderRadius: 20, padding: 10, alignSelf: "flex-start" }}  onPress={() => router.push("/video")}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </div>
      </div>
      </div>
      
        }

     {/* {cardImage && <Image source={cardImage} style={{ width: "100%", height: 150, marginBottom: 10, borderRadius: 15, objectFit: 'contain'}} />}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '90%', display: 'inline-block'}}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>{title}</Text>
        </div>
        <div style={{width: '10%', display: 'inline-block', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          {buttonText && (
            <TouchableOpacity style={{ backgroundColor: "#FF6F00", borderRadius: 20, padding: 10, alignSelf: "flex-start" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>{buttonText}</Text>
            </TouchableOpacity>
          )}
        </div>
      </div>*/}
    </View>
  );
}
