import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Juraj Vincúr – FIIT STU"
      description="Osobná stránka vyučujúceho a výskumníka na FIIT STU"
    >
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>
          <Translate id="homepage.header">Ing. Juraj Vincúr, PhD.</Translate>
        </h1>
        <p>
          <Translate id="homepage.intro">
            Som vyučujúci a výskumník na FIIT STU. Na tejto stránke nájdete informácie o predmetoch, ktoré vediem, ako aj o projektoch, ktorým sa venujem.
          </Translate>
        </p>

        <section style={{ marginTop: '2rem' }}>
          <h2>
            <Translate id="homepage.subjects">Predmety</Translate>
          </h2>
          <ul>
            <li>
              <Link to="/docs/msoft/">
                <Translate id="homepage.subjects.msoft">MSOFT – Modelovanie softvéru</Translate>
              </Link>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>
            <Translate id="homepage.contact">Kontakt</Translate>
          </h2>
          <p>
            📧 <a href="mailto:juraj.vincur@stuba.sk">juraj.vincur@stuba.sk</a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
