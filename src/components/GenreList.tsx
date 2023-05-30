import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageurl from "../services/imageUrl";
import SideBarSkeleton from "./sideBarSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletonsGenre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletonsGenre.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <SideBarSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppedImageurl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
