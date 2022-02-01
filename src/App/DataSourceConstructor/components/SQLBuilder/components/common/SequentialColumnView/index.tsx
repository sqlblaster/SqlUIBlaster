import { Typography, withStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import * as React from 'react';
import { GetExcludedFieldsOf } from 'src/App/utils/type-filters';
import { SequentialColumnViewConfigProps, SequentialColumnViewProps } from './props';
import { sequentialColumnViewStyles } from './styles';

export const SequentialColumnItem = withStyles(sequentialColumnViewStyles)(
  class extends React.Component<SequentialColumnViewProps> {
    public static defaultProps = new SequentialColumnViewConfigProps();

    public render() {
      const {
        columnName,
        foreignColumn,
        prefix,
        noSpaceAfterPrefix,
        suffix,
        noSpaceBeforeSuffix,
        isForeignColumn = false,
        classes
      } = this.props;
      const partialProps: Partial<SequentialColumnViewConfigProps> = {
        suffix,
        noSpaceBeforeSuffix
      };

      return (
        <>
          <>
            {!!prefix && (
              <Typography
                className={classes.prefix}
                style={{ ...(noSpaceAfterPrefix ? { marginRight: 0 } : {}) }}
              >
                {prefix}
              </Typography>
            )}
          </>
          <div className={classes['column-icon-couple']}>
            {isForeignColumn && (
              <ShareIcon className={classes['share-icon']} data-testid='share-icon' />
            )}
            <Typography
              className={classes.column}
              style={{
                ...(!foreignColumn && suffix && noSpaceBeforeSuffix ? { marginRight: 0 } : {})
              }}
            >
              {columnName}
            </Typography>
          </div>
          {foreignColumn && (
            <SequentialColumnItem {...foreignColumn} {...partialProps} isForeignColumn />
          )}
          <>
            {!foreignColumn && suffix && (
              <Typography className={classes.suffix}>{suffix}</Typography>
            )}
          </>
        </>
      );
    }
  }
);

export const SequentialColumnView: React.FC<
  GetExcludedFieldsOf<Pick<SequentialColumnViewProps, 'classes'>, SequentialColumnViewProps>
> = props => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <SequentialColumnItem {...props} />
  </div>
);
