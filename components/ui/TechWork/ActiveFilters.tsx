import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { icons } from '../../../public/assets/icons/icons'
import Tooltip from '../Tooltip'
import Image from 'next/image'
import { clearSkillFilters } from '../../../redux/projectsSlice'

const ActiveFilters: React.FC = () => {
  const { filters } = useAppSelector(({ projects }) => projects)
  const dispatch = useAppDispatch()

  const clearActiveSkillFilters = () => {
    dispatch(clearSkillFilters(true))
  }

  const activeFilterIconComponents = Object.values(icons)
    .filter((icon) => filters[icon.matchText])
    .map((activeIcon) => {
      return {
        captionText: activeIcon.text,
        component: (
          <Tooltip content={activeIcon.text} key={activeIcon.text}>
            <FilterIcon>
              <Image src={activeIcon.icon} alt={activeIcon.text} />
            </FilterIcon>
          </Tooltip>
        ),
      }
    })

  return (
    <ActiveFilterIconsContainer>
      {activeFilterIconComponents.length <= 3 ? (
        activeFilterIconComponents.map((el) => el.component)
      ) : (
        <>
          {activeFilterIconComponents.map((el) => el.component).slice(0, 2)}
          <Tooltip
            content={activeFilterIconComponents
              .map((el) => el.captionText)
              .slice(2)
              .join(', ')}
          >
            <FilterIcon>
              <p>+{activeFilterIconComponents.length - 2}</p>
            </FilterIcon>
          </Tooltip>
        </>
      )}
      {Object.keys(filters).length > 0 && (
        <ClearButton type='button' onClick={clearActiveSkillFilters}>
          Clear X
        </ClearButton>
      )}
    </ActiveFilterIconsContainer>
  )
}

export default ActiveFilters

const ActiveFilterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 30px;
  margin-bottom: 15px;
`

const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 18px;
  height: 18px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 50%;
  background: #403130;
  margin-left: 10px;

  p {
    font-size: 0.7rem;
    margin-top: 2px;
    margin-right: 0px;
    padding: 0;
  }
`

const ClearButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.dangerTextColor};
  color: ${({ theme }) => theme.dangerTextColor};
  height: 28px;
  width: 65px;
  border-radius: 12px;
  margin-left: 15px;
  cursor: pointer;
  :hover,
  :focus {
    color: ${({ theme }) => theme.highlightColor};
    border-color: ${({ theme }) => theme.highlightColor};
    outline: none;
  }
`
