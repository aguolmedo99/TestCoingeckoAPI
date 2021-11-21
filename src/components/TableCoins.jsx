import React, {useState} from 'react'
import {Table, Thead, Tr, Th, Td, Tbody, } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/react'

export const TableCoins = ({coins}) => {
    
    const fav = []; 
    
    function favToggle(name) {

        if (fav.includes(name)) {
            var i = fav.indexOf(name)
            return fav.splice(i,1);
        } 
        else {fav.push(name)}
    }
    
    
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th><StarIcon/></Th>
                    <Th>Rank</Th>
                    <Th>icon</Th>
                    <Th>Name</Th>
                    <Th>Price</Th>
                    <Th> % 24h</Th>
                    <Th>Market Cap</Th>
                </Tr>
            </Thead>
            <Tbody>
                {coins.map(coin =>(
                    <Tr key={coin.name}>
                        <Td><Checkbox onChange={() => {favToggle(coin.name)}}/></Td>
                        <Td>{coin.market_cap_rank}</Td>
                        <Td><img src={coin.image} alt={coin.name} width="20px"></img></Td>
                        <Td>{coin.name}</Td>
                        <Td>$ {coin.current_price}</Td>
                        <Td color={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}>       
                            {coin.price_change_percentage_24h === null ? 0: coin.price_change_percentage_24h.toFixed(2)} %  
                        </Td>
                        <Td>$ {coin.market_cap}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
