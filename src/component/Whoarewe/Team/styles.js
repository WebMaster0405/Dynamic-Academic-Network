import styled from 'styled-components';

export const Styles = styled.div`

@media (min-width:768px)
{
    .team-bg
    {
        background-image: url('/public/assets/images/tean_shape.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;   
        max-width:540px;
        margin-auto;
    }
    .title
    {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
    }
    .general
    {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
}
@media (max-width:768px)
{
    .team-bg
    {
        background-image: url('/public/assets/images/tean_shape.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;   
        max-width:540px;
        margin-auto;
    }
    .title
    {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
    }
    .general
    {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
}
`