import { motion } from 'framer-motion';
import { useState } from 'react';
import { Grid, Row } from '../components/motion-ui/Grid';
import Col from '../components/motion-ui/Grid/Col';

export default function Playground() {
  const [width, setWidth] = useState(100);
  return (
    <div className='container'>
      <h1>Playground</h1>

      <Grid>
        <Row>
          <Col className='box'></Col>
          <Col className='box'></Col>
          <Col className='box'></Col>
        </Row>
        {/* <motion.div
          className='box'
          layout
          style={{ width }}
          onClick={() => setWidth(width + 100)}
        ></motion.div>
        <motion.div
          className='box'
          layout
          style={{ width }}
          onClick={() => setWidth(width + 100)}
        ></motion.div>
        <motion.div
          className='box'
          layout
          style={{ width }}
          onClick={() => setWidth(width + 100)}
        ></motion.div> */}
      </Grid>
    </div>
  );
}
