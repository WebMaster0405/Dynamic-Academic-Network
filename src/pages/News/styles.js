import styled from 'styled-components';

export const Styles = styled.div`

        .news-bg
        {
            display:flex;
            padding:30px 0px;
        }
        .left-part
        {
            padding:50px;
        }
        .right-part
        {
            margin-left:30px;
            padding:30px;
        }
        .title
        {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            width: 100%;
        }
        .general
        {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
        @media (min-width:768px)
        {
            .news-bg
            {
                display:flex;
                padding:30px 0px;
            }
            .left-part
            {
                padding:30px;
            }
            .right-part
            {
                padding:30px;
            }
            .title
            {
                font-style: normal;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
            }
            .general
            {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
            }
            .read
        {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            text-align: right;
            text-decoration:none;
            margin-left:auto;
            color: #7256E0;
        }
        .read img
        {
            margin-left:7px;
        }
        .news-card
{
    width:25%;
}

@media (min-width:992px) and (max-width:1200px)
{
    .news-card
    {
        width:25%;
    }
}

@media (min-width:850px) and (max-width:992px)
{
    .news-card
    {
        width:50%;
    }
}

@media (min-width:768px) and (max-width:850px)
{
    .news-card
    {
        width:50%;
    }
}
@media (min-width:568px) and (max-width:768px)
{
    .news-card
    {
        width:10%;
    }
    .news-bg
    {
        display:none;
        padding:30px 0px;
    }
}
@media (max-width:568px)
{
    .news-card
    {
        width:10%;
    }
    .news-bg
    {
        display:none;
        padding:30px 0px;
    }
}


`