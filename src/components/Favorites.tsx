import { Box, Divider, FlatList, Flex, Pressable, Text } from "native-base";
import { ListRenderItemInfo } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

type DATA_OBJ = {
  location: string;
  icon: string;
  destination: string;
};

const DATA: DATA_OBJ[] = [
  {
    location: "Home",
    icon: "home",
    destination: "Av Nuevo León 26, Colonia Condesa, CDMX",
  },
  {
    location: "Work",
    icon: "briefcase",
    destination: "Av. Paseo de la Reforma,  CDMX",
  },
  {
    location: "Partner",
    icon: "person",
    destination: "Ariosto 12, Polanco, CDMX",
  },
  {
    location: "Add favorite",
    icon: "add",
    destination: "",
  },
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
          {item.icon === "add" && (
            <Feather name="plus" size={24} color="white" />
          )}
        </Box>
        <Flex>
          <Text fontFamily="Poppins_600SemiBold" fontSize={18}>
            {item.location}
          </Text>
          {item.icon != "add" && (
            <Text color="trueGray.500" fontFamily="Poppins_400Regular">
              {item.destination}
            </Text>
          )}
        </Flex>
      </Pressable>
    );
  }

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderFavoritesListHandler}
        ItemSeparatorComponent={() => <Divider />}
      />
    </>
  );
};

export default Favorites;
