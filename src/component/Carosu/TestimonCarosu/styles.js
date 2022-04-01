import styled from 'styled-components';

export const Styles = styled.div`
    .slider-part{
        margin-right:35px;
    }
    .square {
        height: 10px;
        width: 10px;
        background-color: #ffe499;
      }
      
      .square:active {
      
        background-color: #ffc425;
      }
      .dots li button:before {
        background-color: #FFC425;
        height: 10px;
        width: 10px;
        text-indent: -9999px;
        overflow:hidden; 
        }
        .dolor-part
        {
          position:'absolute';
          top:0;
        }
        .logostyle
        {
          background-color:#C4C4C4;
          height:45px;
          width:140px;
          border-radius:14px;
          font-size:16px;
          padding:10px 54px;
        }
        .MuiPaper-elevation4
        {
          box-shadow:none;
        }
        .MuiToolbar-gutters {
          padding:-124px !important;
        }
        .sign-up
        {
          margin-left:auto;
        }
        .sign-up img
        {
          margin-top: auto;
          margin-bottom: auto;
        }
        .btn-sign
        {
          border:2px solid #8D73F4;
          border-radius:8px;
          width:100px;
          height:45px;
          padding:10px 25px;
          margin-left:35px;
          margin-top: auto;
          margin-bottom: auto;
        }
        .footer-bg
        {
          padding:40px 0px;
          display:flex;
        }
        .btn-logofooter
        {
          background-color:#C4C4C4;
          height:45px;
          width:140px;
          border-radius:14px;
          font-size:16px;
          padding:6px 50px;
        }
        .btn-logofooter:hover
        {
           background-color:#D9D7D7;
        }
        .btn-socials
        {
          margin-left:auto;
        }
        .btn-signup
        {
          color:#6A45F8;
          background-color:#182522;
          border:2px solid white;
          border-radius:10px;
          padding:3px 10px;
          width:120px;
          height:35px;
          margin-right:40px;
        }
        .btn-signup:hover
        {
          background-color:#2B3734;
        }
        .social-gap
        {
            margin-left:20px;
        }
        .link-footer
        {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color:white;
          opacity:0.8;
          margin-left:50px;
        }
        .link-footer a
        {
          color:white;
          text-decoration:none;
        }
        .link-footer a:hover
        {
          color:#5E40DA;
          text-decoration:underline;
        }
        .link-footer a:active
        {
          color:#red;
          text-decoration:underline;
        }
        .btn-search
        {
          margin-top:auto;
          margin-bottom:auto;
        }
        .general
        {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          margin-bottom:7px;
        }
        .title
        {
            color:black;
            opacity:0.8;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            margin-bottom:3px;

            text-align: right;

        }
        .test-card
        {
            width:300px;
            margin:auto;
            text-align:left;
            z-index:200;
            margin-top:30px;
        }
        .middle
        {
            
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            /* identical to box height */

            text-align: right;

            color: #B1B1B1;
        }
        .alice-carousel__prev-btn
        {
          text-align: left;
          font-size: 40px;
          position: absolute;
          top: 20%;
          transform: translate(-128%, -50%);
          z-index: 100;
        }
        .alice-carousel__prev-btn-item
        {
          color: white;
          padding: 100px;
        }
        .alice-carousel__dots-item
        {
          background-color: #F3E9ED;
        }
        .alice-carousel__dots-item:not(.__custom).__active {
          background-color: #F2B9B4;
      }
      .alice-carousel__dots {
        display:none;
    }
    .alice-carousel__next-btn 
    {
      text-align: right;
      font-size: 40px;
      position: absolute;
      top: 20%;
      right:0;
      transform: translate(28%, -50%);
      z-index: 100;
  }
  .alice-carousel__next-btn-item
  {
    color: white;
    padding: 100px;
  }
  .alice-carousel__next-btn-item.__inactive {
    opacity: 1;
    pointer-events: none;
  }
  .carosuel-part
  {
    position:relative;
  }
  .carosuel-text
  {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 118%;
    color:white;
    width:50%;
    position:absolute;
    top:34%;
    padding:0px 40px;
  }
  .carosuel-text p
  {
    margin-left: auto;
    width: 380px;
  }
`