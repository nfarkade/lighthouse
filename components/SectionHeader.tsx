import { View, Text } from "react-native";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4A4A4A" }}>{title}</Text>
    </View>
  );
}
