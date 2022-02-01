import { InputAdornment, Typography, withStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import * as React from 'react';
import { RemoveButton } from 'src/components/query-builder/App/DataSourceConstructor/components/SQLBuilder/components/common/Icons/RemoveButton';
import { FixedDatePickerViewProps } from './props';
import { fixedDatePickerStyles } from './styles';

export const addATimeText = 'Add a time';

export const FixedDatePicker = withStyles(fixedDatePickerStyles)(
  class extends React.Component<FixedDatePickerViewProps> {
    public render() {
      const {
        date,
        timeEnabled,
        limits,
        classes,
        handleDateChange,
        handleAddTimeClick,
        handleRemoveTimeClick
      } = this.props;

      return (
        <div className={classes.root}>
          <DatePicker
            value={date}
            onChange={handleDateChange}
            format='DD/MM/YYYY'
            margin='none'
            variant='outlined'
            style={{ width: '100%', marginTop: '10px' }}
            InputProps={{
              inputProps: {
                style: { padding: '7px 14px', fontSize: '13px' }
              }
            }}
            {...(limits ? limits : {})}
          />
          {!timeEnabled && (
            <label className={classes['add-time']} onClick={handleAddTimeClick}>
              <AccessTimeIcon
                style={{
                  marginRight: '5px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              />
              <Typography color='inherit'>{addATimeText}</Typography>
            </label>
          )}
          {timeEnabled && (
            <TimePicker
              value={date}
              onChange={handleDateChange}
              margin='none'
              variant='outlined'
              style={{ width: '100%', marginTop: '10px' }}
              InputProps={{
                inputProps: {
                  style: { padding: '7px 14px', fontSize: '13px' }
                },
                endAdornment: (
                  <InputAdornment position='end'>
                    <RemoveButton onClick={handleRemoveTimeClick} />
                  </InputAdornment>
                )
              }}
            />
          )}
        </div>
      );
    }
  }
);
