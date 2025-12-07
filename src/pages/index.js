import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('heroBanner', styles.heroBanner, 'glassmorphism-card')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="./docs/intro"> {/* This should link to the first chapter */}
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Add more sections for book preview, etc., here later */}
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12', styles.feature)}>
                        <h2>Discover AI-Native Development</h2>
                        <p>Dive deep into the future of software engineering where AI is not just a tool, but an integral part of the development lifecycle. This book explores the convergence of physical AI and humanoid robotics with cutting-edge software paradigms.</p>
                        <ul>
                            <li>Learn the core principles of AI-Native design.</li>
                            <li>Understand how to build systems for physical AI.</li>
                            <li>Explore the architectural patterns for humanoid robotics.</li>
                            <li>Discover the tools and techniques for a new era of development.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}
