/**
 * MDX component map — passed to <MDXRemote components={mdxComponents} />.
 *
 * MDX 文件里可以直接使用 <TLDR>, <PersonaSection>, <ActionCallout>,
 * <KeywordTable>, <RegionCompare>, <FeaturePick> 这些标签, 无需 import.
 */

import { TLDR } from "./tldr";
import { PersonaSection } from "./persona-section";
import { ActionCallout } from "./action-callout";
import { KeywordTable } from "./keyword-table";
import { RegionCompare } from "./region-compare";
import { FeaturePick } from "./feature-pick";

export const mdxComponents = {
  TLDR,
  PersonaSection,
  ActionCallout,
  KeywordTable,
  RegionCompare,
  FeaturePick,
};
