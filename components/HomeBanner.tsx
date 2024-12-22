import React from "react";
import Title from "./Title";
import Container from "./Container";

const HomeBanner = () => {
  return (
    <div>
      <Container className="flex flex-col  items-center  mt-8">
        <Title>Best Clothing Collection</Title>
        <p className="max-w-sm mt-4 text-center text-gray-600 justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Container>
    </div>
  );
};

export default HomeBanner;
