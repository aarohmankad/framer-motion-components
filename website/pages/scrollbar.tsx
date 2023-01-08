import { motion, useScroll, useSpring } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='container'>
      <Head>
        <title>Scroll-linked Animations</title>
        <meta
          name='description'
          content='Animate components based on scroll position and progress.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <h1 className='title'>Scroll-linked Animations</h1>
        <p className='description'>
          <code>useScroll</code> returns 4 values that can be used to animate
          components based on scroll position and progress.
        </p>

        <motion.div
          style={{
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '10px',
            background: 'red',
            transformOrigin: '0%',
          }}
        />

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          incidunt hic distinctio fugit cupiditate nam ipsa, error officiis
          iure, ad perspiciatis. Voluptas enim quasi ipsa veniam id pariatur
          quam molestias.
        </p>
        <p>
          Omnis, voluptates at quidem dicta temporibus natus aliquam doloribus
          consectetur culpa excepturi porro suscipit odio consequatur! Ad veniam
          et beatae cumque repellendus ea. Dolore maiores distinctio veritatis
          molestiae, alias magni.
        </p>
        <p>
          Commodi impedit fugiat distinctio suscipit neque quo enim tenetur
          error rerum obcaecati similique quisquam ipsam, beatae fugit atque,
          deserunt sequi nulla, nemo numquam placeat consequuntur quibusdam
          reiciendis. Recusandae, quidem suscipit.
        </p>
        <p>
          Aperiam dolor accusamus vel ex velit voluptatem reprehenderit corrupti
          harum, quia sequi aspernatur, deserunt, alias ipsam id dolorem.
          Consectetur eum sapiente error quia. Voluptatibus expedita vero
          incidunt tenetur commodi provident.
        </p>
        <p>
          Iste suscipit, laborum nisi repellat in repudiandae quibusdam ipsam
          asperiores omnis, aperiam assumenda? Dolorem et natus ab nihil facere
          non officiis assumenda, a excepturi, maxime debitis reiciendis,
          architecto dolores. Velit?
        </p>
        <p>
          Eveniet nesciunt repudiandae sunt voluptates libero ullam id quod
          pariatur molestiae iusto laborum eius dolor modi necessitatibus
          aperiam vitae eum incidunt illo exercitationem distinctio, sed tempore
          minima nisi. Dolorum, adipisci.
        </p>
        <p>
          Quaerat, eaque. Adipisci ipsum dolore vel aut ut dicta maiores iure
          neque sunt atque, aliquid illum consequatur dolorem eveniet, explicabo
          quam dignissimos, minus sint praesentium. Aspernatur officia dicta
          facere labore?
        </p>
        <p>
          Quam quaerat aliquid beatae iste ullam cum molestiae vero, dicta
          reprehenderit hic porro blanditiis laudantium possimus provident modi
          molestias eveniet iusto! Necessitatibus, omnis maiores itaque culpa
          voluptatum error ex distinctio!
        </p>
        <p>
          Consequatur delectus nisi cupiditate enim voluptatibus, unde eum
          veritatis sunt illo asperiores corrupti neque labore, nulla non
          mollitia iure temporibus impedit rerum commodi ea totam debitis
          officiis. Recusandae, quidem at.
        </p>
        <p>
          Natus voluptates earum veritatis eius! Et rerum dignissimos sint
          voluptatum velit dolorem est exercitationem accusantium, voluptatibus
          ullam earum repellat mollitia architecto in omnis dolorum natus
          repudiandae, deserunt nisi pariatur sit.
        </p>
        <p>
          Dignissimos rem at cupiditate hic necessitatibus numquam quam
          excepturi placeat totam nesciunt saepe nobis facilis itaque, dicta in
          voluptate quis culpa, dolor explicabo, tempore voluptatibus! Natus
          consequuntur ad ipsam. Nulla.
        </p>
        <p>
          Unde quibusdam odio deleniti nam nobis quo dolores nulla et omnis
          commodi officiis aliquam rem nesciunt iste voluptates ab, non
          suscipit, facilis consectetur perspiciatis amet est a? Asperiores,
          ducimus excepturi.
        </p>
        <p>
          Culpa, deleniti sed reiciendis dignissimos itaque nihil totam fugit
          nesciunt! Quae distinctio omnis mollitia sequi recusandae iure culpa
          cum dolorem! Ratione tempore autem, impedit eos ullam voluptatem quia
          odio ab!
        </p>
        <p>
          Voluptatum, ullam. Beatae accusamus totam quos, praesentium nesciunt
          recusandae dolore est voluptatem incidunt repellat eligendi tenetur
          eius eum quia ab. Tempora consequuntur minus possimus pariatur velit
          accusantium architecto facilis dolorem!
        </p>
        <p>
          Nesciunt eum saepe accusamus, amet voluptatum voluptatem facilis.
          Sapiente, adipisci sed? Quibusdam obcaecati eligendi, dicta beatae
          sint deserunt nesciunt sit nulla exercitationem, quae temporibus
          consequuntur rem! Labore nostrum accusamus voluptate.
        </p>
        <p>
          Possimus corrupti doloremque voluptate adipisci temporibus deleniti.
          Provident atque aperiam accusamus illum quam, fugiat fuga, consectetur
          nisi incidunt dolor fugit reiciendis qui ducimus esse! Voluptatem
          quibusdam hic adipisci quasi eligendi?
        </p>
        <p>
          Pariatur, nam. Velit, cupiditate. Debitis impedit fugiat provident
          eligendi dolorem, tempore molestias animi est illo possimus
          repudiandae, officiis distinctio commodi. Incidunt dolor magnam nobis
          libero neque nisi amet minus inventore.
        </p>
        <p>
          Impedit soluta earum facilis est ex tempore, consectetur quo
          voluptatum fugit animi accusantium fugiat vitae repudiandae laborum
          quam iure amet. Sequi ab esse mollitia tempora officia hic laborum vel
          distinctio?
        </p>
        <p>
          Dolore itaque eligendi nulla maiores velit nesciunt a aspernatur
          officiis quia molestias sit expedita accusamus quo, architecto rem
          tenetur, rerum sed aperiam officia perferendis fugiat libero! Tempore
          numquam asperiores maiores!
        </p>
        <p>
          Et voluptatem modi, sint quam tempora voluptatum totam perspiciatis
          tempore laborum fugiat quasi neque non quisquam animi! Cum deserunt
          fugiat necessitatibus corporis earum nisi adipisci tempora! Est
          molestiae dolorem amet.
        </p>
      </main>
    </div>
  );
};

export default Home;
