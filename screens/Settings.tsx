import { Text, View } from "react-native";
import { ListItem } from "../components/ListItem";
import Entypo from '@expo/vector-icons/Entypo'
import { theme } from "../theme";

export const Settings = () => (
    <View 
    style={{
        // flexDirection: 'column',
        margin: 16,
        borderRadius: 11,
        overflow: 'hidden',
    }}>
        <ListItem
        label="Categories"
        detail={<Entypo name="chevron-thin-right" color='white' style={{opacity: 0.3}} size={20} />}
        onClick={() => {}}
        />
        {/* <ListItem
        label="Report a bug"
        detail={<Entypo name="chevron-thin-right" color='white' size={20} />}
        onClick={() => {}}
        /> */}
        <ListItem
        label="Erase all data"
        isDestructive
        onClick={() => {}}
        />

    </View>
)