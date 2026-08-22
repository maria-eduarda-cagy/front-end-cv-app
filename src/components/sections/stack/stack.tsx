import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import { stackGroups } from "./data";
import { Group, GroupsGrid, GroupTitle, StackSection, Tag, TagList } from "./styles";

export function Stack() {
  const { t } = useTranslation();

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
              <TagList>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagList>
            </Group>
          ))}
        </GroupsGrid>
      </ScrollEnter>
    </StackSection>
  );
}
