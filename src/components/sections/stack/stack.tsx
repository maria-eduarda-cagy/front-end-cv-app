import { useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import { stackGroups } from "./data";
import {
  Bar,
  Group,
  GroupsGrid,
  GroupTitle,
  Item,
  ItemList,
  ItemName,
  Percent,
  Row,
  StackSection,
  Track,
} from "./styles";

export function Stack() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <StackSection id="stack">
      <ScrollEnter from="left">
        <SectionHeading eyebrow={t("stack.eyebrow")} title={t("stack.title")} />
      </ScrollEnter>

      <ScrollEnter from="right">
        <GroupsGrid>
          {stackGroups.map((group) => (
            <Group key={group.key}>
              <GroupTitle>{t(`stack.groups.${group.key}`)}</GroupTitle>
              <ItemList>
                {group.items.map((item) => (
                  <Item key={item.name}>
                    <Row>
                      <ItemName>{item.name}</ItemName>
                      <Percent aria-hidden="true">{item.level}%</Percent>
                    </Row>
                    <Track>
                      <Bar
                        aria-hidden="true"
                        initial={reduceMotion ? undefined : { width: 0 }}
                        whileInView={reduceMotion ? undefined : { width: `${item.level}%` }}
                        viewport={reduceMotion ? undefined : { once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={reduceMotion ? { width: `${item.level}%` } : undefined}
                      />
                    </Track>
                  </Item>
                ))}
              </ItemList>
            </Group>
          ))}
        </GroupsGrid>
      </ScrollEnter>
    </StackSection>
  );
}
