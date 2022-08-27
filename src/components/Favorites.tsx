import { Box, Divider, FlatList, Flex, Pressable, Text } from "native-base";
import { ListRenderItemInfo } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type DATA_OBJ = {
  location: string;
  icon: string;
  destination: string;
};

const DATA: DATA_OBJ[] = [
  {
    location: "Home",
    icon: "home",
    destination: "Sor Juana Ines de la Cruz 204",
  },
  { location: "Work", icon: "briefcase", destination: "Microsoft" },
  { location: "Partner", icon: "person", destination: "Villa Marino 130" },
];

const Favorites: React.FC = () => {
  function renderFavoritesListHandler(itemData: ListRenderItemInfo<DATA_OBJ>) {
    const item = itemData.item;

    return (
      <Pressable
        key={itemData.index}
        flexDir="row"
        my={5}
        alignItems="center"
        _pressed={{ opacity: 0.5 }}
      >
        <Box
          bg="trueGray.300"
          borderRadius={100}
          p={3}
          mr={2}
          alignItems="center"
          justifyContent="center"
        >
          {item.icon === "home" && (
            <Ionicons name="home" size={24} color="white" />
          )}
          {item.icon === "briefcase" && (
            <Ionicons name="briefcase" size={24} color="white" />
          )}
          {item.icon === "person" && (
            <Ionicons name="person" size={24} color="white" />
          )}
        </Box>
        <Flex>
          <Text fontWeight="bold" fontSize="md">
            {item.location}
          </Text>
          <Text color="trueGray.500">{item.destination}</Text>
        </Flex>
      </Pressable>
    );
  }

  return (
    // TODO: add divider
    <FlatList
      data={DATA}
      renderItem={renderFavoritesListHandler}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default Favorites;
