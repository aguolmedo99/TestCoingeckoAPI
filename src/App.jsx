import  React, {useEffect, useState} from "react";
import {Button, Flex, Heading} from "@chakra-ui/react";
import {TableCoins} from './components/TableCoins.jsx'
import { Navbar } from "./components/Navbar.jsx";
import axios from "axios";

export const App = () => {
  

  const [coins, setCoins] = useState([]);
  const [page,setPage] = useState([]);

  const getData = async (page) => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page='+page+'&sparkline=false')
  setCoins(res.data)
  setPage(page)
  };

  useEffect (() => {
      getData(1)
  },[])
  
  const Paginator = () => (
    <Flex direction="column">
      <TableCoins coins={coins} />
      <Flex width="100%" justifyContent="center" alignItems="center" my={5}>
        <Button mx={3} onClick={() => {
          if (page >= 2) 
          getData(page -1)
          window.scrollTo(0, 0)
         }}>Prev</Button>
        <p>Page {page}</p>
        <Button mx={3} onClick={() => { 
          getData(page+1)
          window.scrollTo(0, 0)
         }} >Next</Button>
      </Flex>
    </Flex>
  );

  
  return (
    <Flex justifyContent="center">
        <Flex alignItems="center" direction="column">
          <Heading my="10">Coingecko Prices</Heading>
          <Navbar />
          <Paginator />
        </Flex>
    </Flex>
  );
}

