import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Hết Thương Cạn Nhớ ',
    artist: 'Đức Phúc',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/nhac-97bc0.appspot.com/o/anhBaiHat%2Fanh1.jpg?alt=media&token=19506db4-7fd6-40ef-97f2-d005f0ba2d75",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/nhac-97bc0.appspot.com/o/baihat%2FHet-Thuong-Can-Nho-Duc-Phuc.mp3?alt=media&token=e17724ab-4b77-460a-b800-65e433699047",
  },
  {
    title: 'Em Gì Ơi',
    artist: 'Jack',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/nhac-97bc0.appspot.com/o/anhBaiHat%2Femgioi.jpg?alt=media&token=81d6ae31-2a8d-4603-9054-b16b17cac76c",
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/nhac-97bc0.appspot.com/o/baihat%2FEm-Gi-Oi-Jack-K-ICM.mp3?alt=media&token=ab36649a-0d6e-4e1f-96e2-45facc868c8d',
  },
  
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


