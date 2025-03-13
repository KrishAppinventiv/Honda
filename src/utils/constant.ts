import { useState } from "react";

export const [states] = useState([
    {label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
    {label: 'Maharashtra', value: 'Maharashtra'},
    {label: 'Karnataka', value: 'Karnataka'},
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Gujarat', value: 'Gujarat'},
  ]);
 export const citiesData = {
    'Uttar Pradesh': [
      {label: 'Noida', value: 'Noida'},
      {label: 'Lucknow', value: 'Lucknow'},
      {label: 'Varanasi', value: 'Varanasi'},
      {label: 'Kanpur', value: 'Kanpur'},
    ],
    Maharashtra: [
      {label: 'Mumbai', value: 'Mumbai'},
      {label: 'Pune', value: 'Pune'},
      {label: 'Nagpur', value: 'Nagpur'},
    ],
    Karnataka: [
      {label: 'Bangalore', value: 'Bangalore'},
      {label: 'Mysore', value: 'Mysore'},
    ],
    'Tamil Nadu': [
      {label: 'Chennai', value: 'Chennai'},
      {label: 'Coimbatore', value: 'Coimbatore'},
    ],
    Gujarat: [
      {label: 'Ahmedabad', value: 'Ahmedabad'},
      {label: 'Surat', value: 'Surat'},
    ],
  };
  

  export const pincodeData = {
    Noida: [
      {label: '201301', value: '201301'},
      {label: '201310', value: '201310'},
      {label: '201305', value: '201305'},
    ],
    Lucknow: [
      {label: '226001', value: '226001'},
      {label: '226010', value: '226010'},
      {label: '226015', value: '226015'},
    ],
    Mumbai: [
      {label: '400001', value: '400001'},
      {label: '400020', value: '400020'},
      {label: '400050', value: '400050'},
    ],
    Pune: [
      {label: '411001', value: '411001'},
      {label: '411030', value: '411030'},
    ],
    Bangalore: [
      {label: '560001', value: '560001'},
      {label: '560034', value: '560034'},
    ],
    Chennai: [
      {label: '600001', value: '600001'},
      {label: '600040', value: '600040'},
    ],
    Ahmedabad: [
      {label: '380001', value: '380001'},
      {label: '380015', value: '380015'},
    ],
  };