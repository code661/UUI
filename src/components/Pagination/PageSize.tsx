import React, { useContext } from 'react';
import { UUIFunctionComponent, UUIFunctionComponentProps } from '../../core';
import { PaginationContext } from './PaginationContext';
import { HTMLSelect } from '../Select';
import { createComponentPropTypes, PropTypes } from '../../utils/createPropTypes';

export interface PageSizeFeatureProps {
  pageSizeOptions: number[];
  labelRender?: (pageSize: number) => string;
}

export const PageSizePropTypes = createComponentPropTypes<PageSizeFeatureProps>({
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  labelRender: PropTypes.func,
})

export const PageSize = UUIFunctionComponent({
  name: 'PageSize',
  nodes: {
    Root: 'div',
    Select: HTMLSelect,
  },
  propTypes: PageSizePropTypes,
}, (props: PageSizeFeatureProps, { nodes }) => {
  const { Root, Select } = nodes

  const context = useContext(PaginationContext)
  if (!context) {
    console.warn('[UUI] please use <PageSize> in <Pagination>')
    return <></>
  }
  const { pagination, loading } = context

  return (
    <Root>
      <Select
        disabled={loading}
        options={props.pageSizeOptions.map((i) => {
          return {
            label: props.labelRender ? props.labelRender(i) : `${i} / Page`,
            value: i,
          }
        })}
        value={pagination.limit}
        onChange={(value) => pagination.changePageSize(value)}
      />
    </Root>
  )
})

export type PageSizeProps = UUIFunctionComponentProps<typeof PageSize>