import { useMemo } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { theme } from "../theme";

type Props = {
    label: string;
    detail?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
}

export const ListItem = ({
    label,
    detail,
    onClick,
    swipeToDelete,
    onDelete,
    isDestructive,
} : Props) => {
    const item = useMemo(() => (
        <TouchableOpacity
                style={{
                    width: "100%",
                    flexDirection: 'row',
                    justifyContent: !!detail ? 'space-between' : 'flex-start',
                    alignItems: 'center',
                    padding: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                    backgroundColor: theme.colors.card,
                }}
                onPress={onClick}
            >
                <Text style={{ fontSize: 18, color: isDestructive ? theme.colors.error : 'white' }}>{label}</Text>
                {detail}

            </TouchableOpacity>
    ), []);
    if (swipeToDelete) {
        return (
            <Swipeable
            renderRightActions={() => (
                <TouchableOpacity
                style={{
                    // backgroundColor: isDestructive ? 'red' : 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 100,
                }}
                onPress={onDelete}
                >
                    <Text style={{color: 'white'}}>Delete</Text>
                </TouchableOpacity>
            )}
            onSwipeableRightOpen={onDelete}
        >
            {item}
        </Swipeable>
        )
    }
    return item;

};