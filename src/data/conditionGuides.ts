import { ConditionGuide } from './conditionTypes';
import { SPINE_CONDITIONS } from './conditionsSpineData';
import { UPPER_LIMB_CONDITIONS } from './conditionsUpperLimbData';
import { LOWER_LIMB_SPORTS_CONDITIONS } from './conditionsLowerLimbSportsData';
import { REHAB_CONDITIONS } from './conditionsRehabData';

// Re-export types
export * from './conditionTypes';

// Re-export individual category arrays
export { SPINE_CONDITIONS } from './conditionsSpineData';
export { UPPER_LIMB_CONDITIONS } from './conditionsUpperLimbData';
export { LOWER_LIMB_SPORTS_CONDITIONS } from './conditionsLowerLimbSportsData';
export { REHAB_CONDITIONS } from './conditionsRehabData';
export { REHABILITATION_AUTHORITY_GUIDES, getRehabGuideById } from './rehabilitationAuthorityData';

/**
 * Dedicated Rehabilitation Programs for Rehabilitation Hub
 */
export const REHABILITATION_PROGRAMS: ConditionGuide[] = REHAB_CONDITIONS;


/**
 * Master List of All Condition Guides
 * Includes the 10 Core User-Specified Condition Guides plus specialized neuro & post-op rehab protocols.
 */
export const CONDITION_GUIDES: ConditionGuide[] = [
  ...SPINE_CONDITIONS,
  ...UPPER_LIMB_CONDITIONS,
  ...LOWER_LIMB_SPORTS_CONDITIONS,
  ...REHAB_CONDITIONS
];

/**
 * Helper to fetch a condition guide by its unique ID or URL slug
 */
export const getConditionById = (idOrSlug: string): ConditionGuide | undefined => {
  const normalized = idOrSlug.toLowerCase().trim();
  return CONDITION_GUIDES.find(
    (c) => c.id.toLowerCase() === normalized || c.slug.toLowerCase() === normalized
  );
};
