'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EthCrystal from '../components/EthCrystal';

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] w-full flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0.4, 4], fov: 50 }} dpr={[1, 2]}>
            <color attach="background" args={[0, 0, 0]} />
            <Float floatIntensity={2} rotationIntensity={0.3}>
              <EthCrystal />
            </Float>
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Canvas>
        </div>
        <div className="relative container-max">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          >
            The Future of <span className="bg-gradient-to-r from-eth-cyan via-eth-blue to-eth-purple bg-clip-text text-transparent">Crypto</span> is
            <br className="hidden sm:block"/> Ethereum.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            Programmable money, global settlement, unstoppable applications. Secure, decentralized, and endlessly extensible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex gap-4"
          >
            <Link href="#why" className="glass px-6 py-3 text-lg font-medium hover:bg-white/10 transition">Why Ethereum</Link>
            <a href="https://ethereum.org" target="_blank" rel="noreferrer" className="px-6 py-3 text-lg font-medium border border-white/20 rounded-3xl hover:bg-white/5 transition">Learn More</a>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section id="why" className="relative py-24">
        <div className="container-max space-y-20">
          <div className="section-grid">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold">Programmable Money & Unstoppable Apps</h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Smart contracts enable trust-minimized applications: from decentralized finance (DeFi) and NFTs to DAOs and on-chain identity.
                Ethereum provides a neutral, credibly neutral execution layer where code is law and settlement is final.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/90">
                  <li>DeFi liquidity and lending</li>
                  <li>Tokenized real-world assets</li>
                  <li>On-chain identity & attestations</li>
                  <li>DAOs and community governance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-grid">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">Security & Decentralization</h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                With thousands of nodes, robust client diversity, and battle-tested cryptography, Ethereum delivers censorship resistance and credible neutrality.
                Proof?of?Stake aligns incentives while dramatically reducing energy usage.
              </p>
            </div>
            <div>
              <div className="glass p-8">
                <p className="text-white/80">Post?Merge Ethereum consumes ~99.95% less energy than Proof?of?Work networks while maintaining strong security guarantees.</p>
              </div>
            </div>
          </div>

          <div className="section-grid">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-4xl font-bold">Scalability with Rollups</h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                Layer 2 rollups inherit Ethereum security while delivering massive throughput and low fees. EIP?4844 data blobs and future Danksharding multiply capacity further.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass p-8">
                <ul className="list-disc pl-5 text-white/80">
                  <li>Optimistic and ZK rollups</li>
                  <li>Shared liquidity and interoperability</li>
                  <li>Trust?minimized bridges</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-grid">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold">Open Innovation & Community</h3>
              <p className="mt-5 text-white/80 leading-relaxed">
                A global, open-source community iterates in the open: from ERC standards to cutting-edge cryptography. Ethereum is a public good, stewarded by builders.
              </p>
            </div>
            <div>
              <div className="glass p-8">
                <p className="text-white/80">Composability compounds innovation: every protocol is a building block, every app an API.</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6">
            <p className="text-white/60">Ready to build the future?</p>
            <a href="https://ethereum.org/en/developers/" target="_blank" rel="noreferrer" className="mt-4 inline-block glass px-6 py-3 text-lg font-medium hover:bg-white/10 transition">Start Building</a>
          </div>
        </div>
      </section>
    </main>
  );
}
