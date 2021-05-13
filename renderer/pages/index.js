import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { PrismaClient } from "@prisma/client";

import { Chapters, Container, QuickLinks } from "../components";
import Settings from "../components/Settings";
import { loadDatabase } from "../redux/actions/databaseActions";

const prisma = new PrismaClient();

const Home = ({ verses, taisirul, tafsirAhbayan, tafsirFmazid }) => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(state => state.theme.dark);
  const database = useSelector(state => state.database);

  const logo = isDarkTheme ? "/images/quranDark.png" : "/images/quranLight.png";

  useEffect(() => {
    dispatch(loadDatabase({ verses, taisirul, tafsirAhbayan, tafsirFmazid }));
  }, []);

  console.log(database);

  return (
    <React.Fragment>
      <Head>
        <title>Al Quran</title>
      </Head>
      <div className="w-full h-80 flex justify-center items-center space-y-5 flex-col">
        <img src={logo} alt="" className="w-52" />
        <h1 className="text-4xl text-center font-headTitle text-indigo-900 font-bold dark:text-gray-400 transition-colors duration-500">
          {/* The Nobel Quran */}
          Al Quran ul Kareem
        </h1>
      </div>
      <QuickLinks />
      <Container>
        <div className="space-y-11">
          <h1 className="text-2xl text-gray-600 dark:text-gray-400 font-signika">
            Surahs (Chapters)
          </h1>
          <Chapters />
          <div className="h-10" />
        </div>
      </Container>
      <Settings />
    </React.Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  const verses = await prisma.verses.findMany();
  const tafsirAhbayan = await prisma.tafsir_ahbayan.findMany();
  const tafsirFmazid = await prisma.tafsir_fmazid.findMany();
  const taisirul = await prisma.taisirul.findMany();

  return {
    props: {
      verses,
      taisirul,
      tafsirAhbayan,
      tafsirFmazid,
    },
  };
};
