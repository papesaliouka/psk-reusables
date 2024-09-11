import { StyleSheet } from 'react-native';
import colors from '../colors';
import spacing from '../spacing';

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: spacing.lg,
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text_primary,
    marginLeft: spacing.sm,
  },
  cropChips: {
    flexDirection: 'row',
    gap: spacing.xs,
    flexGrow: 1,
    marginLeft: spacing.md,
  },
  chip: {
    borderRadius: spacing.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    color: colors.white,
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  iconText: {
    fontSize: 14,
    color: colors.text_secondary,
    fontWeight: '500',
  },
});

export default styles;
