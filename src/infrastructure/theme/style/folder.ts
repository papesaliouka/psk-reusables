import { StyleSheet } from "react-native";

import colors from "../colors";
import spacing from "../spacing";

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    width: 380,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.md,
    borderRadius: spacing.lg,
    backgroundColor: colors.white,
    marginVertical: spacing.md,
    marginHorizontal: spacing.sm,
  },
  contentContainer:{
    display: 'flex',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spacing.xs,
    borderRadius: spacing.md,
    backgroundColor: colors.bg_tertiary,
  },
  legendItemContainer:{
    display: 'flex',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
    borderRadius: spacing.md,
    backgroundColor: colors.bg_tertiary,
  },

});

export default styles;