import {unsafeCSS} from 'lit-element';

export const displayFlex = unsafeCSS`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const borderBox = unsafeCSS`
  box-sizing: border-box;
`;

export const displayInlineFlex = unsafeCSS`
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
`;

export const horizontal = unsafeCSS`
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
`;

export const vertical = unsafeCSS`
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
`;

export const wrap = unsafeCSS`
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const noWrap = unsafeCSS`
  -ms-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
`;

export const flexFactor = unsafeCSS`
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
`;

export const flexFactorAuto = unsafeCSS`
  -ms-flex: 1 1 auto;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
`;

export const flexFactorNone = unsafeCSS`
  -ms-flex: 1 1 auto;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
`;

export const displayNone = unsafeCSS`
  display: none !important;
`;

export const flex2 = unsafeCSS`
  -ms-flex: 2;
  -webkit-flex: 2;
  flex: 2;
`;

export const flex3 = unsafeCSS`
  -ms-flex: 3;
  -webkit-flex: 3;
  flex: 3;
`;

export const flex4 = unsafeCSS`
  -ms-flex: 4;
  -webkit-flex: 4;
  flex: 4;
`;

export const flex5 = unsafeCSS`
  -ms-flex: 5;
  -webkit-flex: 5;
  flex: 5;
`;

export const flex6 = unsafeCSS`
  -ms-flex: 6;
  -webkit-flex: 6;
  flex: 6;
`;

export const flex7 = unsafeCSS`
  -ms-flex: 7;
  -webkit-flex: 7;
  flex: 7;
`;

export const flex8 = unsafeCSS`
  -ms-flex: 8;
  -webkit-flex: 8;
  flex: 8;
`;

export const flex9 = unsafeCSS`
  -ms-flex: 9;
  -webkit-flex: 9;
  flex: 9;
`;

export const flex10 = unsafeCSS`
  -ms-flex: 10;
  -webkit-flex: 10;
  flex: 10;
`;

export const flex11 = unsafeCSS`
  -ms-flex: 11;
  -webkit-flex: 11;
  flex: 11;
`;

export const flex12 = unsafeCSS`
  -ms-flex: 12;
  -webkit-flex: 12;
  flex: 12;
`;

export const horizontalReverse = unsafeCSS`
  -ms-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
`;

export const verticalReverse = unsafeCSS`
  -ms-flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
`;

export const wrapReverse = unsafeCSS`
  -ms-flex-wrap: wrap-reverse;
  -webkit-flex-wrap: wrap-reverse;
  flex-wrap: wrap-reverse;
`;

export const displayBlock = unsafeCSS`
  display: block;
`;

export const invisible = unsafeCSS`
  visibility: hidden !important;
`;

export const relative = unsafeCSS`
  position: relative;
`;

export const fit = unsafeCSS`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const scroll = unsafeCSS`
  -webkit-overflow-scrolling: touch;
  overflow: auto;
`;

export const fixed = unsafeCSS`
  position: fixed;
`;

export const fixedTop = unsafeCSS`
  top: 0;
  left: 0;
  right: 0;
`;

export const fixedRight = unsafeCSS`
  top: 0;
  right: 0;
  bottom: 0;
`;

export const fixedLeft = unsafeCSS`
  top: 0;
  bottom: 0;
  left: 0;
`;

export const fixedBottom = unsafeCSS`
  right: 0;
  bottom: 0;
  left: 0;
`;

export const startAligned = unsafeCSS`
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
`;

export const centerAligned = unsafeCSS`
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const endAligned = unsafeCSS`
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
`;

export const baseline = unsafeCSS`
  -ms-flex-align: baseline;
  -webkit-align-items: baseline;
  align-items: baseline;
`;

export const startJustified = unsafeCSS`
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
`;

export const centerJustified = unsafeCSS`
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;

export const endJustified = unsafeCSS`
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
`;

export const aroundJustified = unsafeCSS`
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  justify-content: space-around;
`;

export const justified = unsafeCSS`
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
`;

export const selfStart = unsafeCSS`
  -ms-align-self: flex-start;
  -webkit-align-self: flex-start;
  align-self: flex-start;
`;

export const selfCenter = unsafeCSS`
  -ms-align-self: center;
  -webkit-align-self: center;
  align-self: center;
`;

export const selfEnd = unsafeCSS`
  -ms-align-self: flex-end;
  -webkit-align-self: flex-end;
  align-self: flex-end;
`;

export const selfStretch = unsafeCSS`
  -ms-align-self: stretch;
  -webkit-align-self: stretch;
  align-self: stretch;
`;

export const selfBaseline = unsafeCSS`
  -ms-align-self: baseline;
  -webkit-align-self: baseline;
  align-self: baseline;
`;

export const startAlignedContent = unsafeCSS`
  -ms-flex-line-pack: start; /* IE10 */
  -ms-align-content: flex-start;
  -webkit-align-content: flex-start;
  align-content: flex-start;
`;

export const endAlignedContent = unsafeCSS`
  -ms-flex-line-pack: end; /* IE10 */
  -ms-align-content: flex-end;
  -webkit-align-content: flex-end;
  align-content: flex-end;
`;

export const centerAlignedContent = unsafeCSS`
  -ms-flex-line-pack: center; /* IE10 */
  -ms-align-content: center;
  -webkit-align-content: center;
  align-content: center;
`;

export const betweenAlignedContent = unsafeCSS`
  -ms-flex-line-pack: justify; /* IE10 */
  -ms-align-content: space-between;
  -webkit-align-content: space-between;
  align-content: space-between;
`;

export const aroundAlignedContent = unsafeCSS`
  -ms-flex-line-pack: distribute; /* IE10 */
  -ms-align-content: space-around;
  -webkit-align-content: space-around;
  align-content: space-around;
`;
