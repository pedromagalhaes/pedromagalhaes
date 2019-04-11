import React from 'react'
import { Segment, Grid, Item, List } from 'semantic-ui-react'

import ModuleTitle from '../../components/ModuleTitle'
import ListItem from '../../components/ListItem'
import SideBarListItem from '../../components/SideBarListItem'

const ItemExampleDivided = () => (
  <>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column computer={11}>
          <ModuleTitle as='h3' icon='plug' text='Uptime Guarantee' />
          <Segment attached>
            <Item.Group divided>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column computer={5}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <ModuleTitle as='h4' icon='plug' text='Uptime Guarantee' />
                <Segment attached>
                  <List divided relaxed>
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ModuleTitle as='h4' icon='plug' text='Uptime Guarantee' />
                <Segment attached>
                  <List divided relaxed>
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ModuleTitle as='h4' icon='plug' text='Uptime Guarantee' />
                <Segment attached>
                  <List divided relaxed>
                    <SideBarListItem />
                    <SideBarListItem />
                    <SideBarListItem />
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

export default ItemExampleDivided
