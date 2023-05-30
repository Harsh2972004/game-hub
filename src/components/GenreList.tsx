import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageurl from "../services/imageUrl";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <List key={genre.id}>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={croppedImageurl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </List>
      ))}
    </ul>
  );
};

export default GenreList;
