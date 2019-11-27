import axios from 'axios'
import './axiosConfig'

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        console.log(err)
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function deleteBank(url) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {"abc":1})
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}



export function getAmount(url) {
  return new Promise((resolve, reject) => {
    axios.get(url, {})
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}


