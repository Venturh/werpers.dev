import styled from "styled-components";
import { useTranslation } from "next-translate";

import {
  ButtonText,
  CustomLink,
  Header,
  Layout,
  Socials,
  Span,
  Text,
  Title,
} from "components";
import { colors } from "styles";
import { NextSeo } from "next-seo";

const About = () => {
  const { t } = useTranslation();

  const url = "https://www.maxwerpers.me/de/about";
  const title = "Über mich - Maximilian Werpers";

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          title,
          url,
          type: "website",
        }}
      />
      <Layout small>
        <Wrapper>
          <Header text={t("about:title")} />
          <div>
            <Title as="h2">{t("about:subtitle")}</Title>
            <Text style={{ marginTop: "0.5em" }}>
              {t("about:1")}
              <CustomLink underline to="https://clickbar.dev/">
                <Span color="primary">clickbar.dev</Span>
              </CustomLink>
              {" " + t("about:2")}
            </Text>
            <br />
            <Text>
              {t("about:3")}{" "}
              <CustomLink underline nav to="/projects">
                <Span color="primary">{t("about:here")}</Span>
              </CustomLink>
            </Text>
          </div>
          <Cv href="/cv.pdf" download>
            <ButtonText>Download CV</ButtonText>
          </Cv>
          <div>
            <Title>{t("common:contactHeader")}</Title>
            <Text>{t("common:contactBody")}</Text>
            <CustomLink to="mailto:contact@maxwerpers.me">
              <Text>contact@maxwerpers.me</Text>
            </CustomLink>
          </div>
          <div>
            <Title>{t("common:socialsTitle")}</Title>
            <Socials />
          </div>
        </Wrapper>
      </Layout>
    </>
  );
};

export default About;

const Wrapper = styled.main`
  div {
    margin: 1em 0;
  }
`;

const Cv = styled.a`
  margin-top: 0.5em;
  display: inline-flex;
  padding: 0.5em;
  background: ${colors.body};
  border: 1px solid ${colors.primary};
  ${ButtonText} {
    color: ${colors.primary};
  }

  border-radius: 0.25em;
`;
