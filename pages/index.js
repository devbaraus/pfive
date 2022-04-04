import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Home() {
  const divRef = useRef()

  useEffect(() => {
    if (window.p5 && divRef.current) {
      new window.p5(p => {

        let max_distance;

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight)
            .parent(divRef.current);
          p.noStroke();
          max_distance = p.dist(0, 0, p.width, p.height);
        }

        p.draw = () => {
          p.background(0);

          for (let i = 0; i <= p.width; i += 20) {
            for (let j = 0; j <= p.height; j += 20) {
              let size = p.dist(p.mouseX, p.mouseY, i, j);
              size = (size / max_distance) * 66;
              p.ellipse(i, j, size, size);
            }
          }
        }
      });
    }
    console.log('hello')
  }, [])

  return (
    <div>
      Hello world
      <div ref={divRef} />
    </div>
  )
}
