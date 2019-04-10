import React from 'react'
import { Segment, Grid, Icon, Image, Item, Label, Header, List } from 'semantic-ui-react'

const paragraph = <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />

const ItemExampleDivided = () => (
  <>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column computer={11}>
          <Header as="h3" attached="top">
            <Icon name="plug" />
            <Header.Content>Uptime Guarantee</Header.Content>
          </Header>

          <Segment attached>
            <Item.Group divided>
              <Item>
                <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <Item.Content>
                  <Item.Header as="a">12 Years a Slave</Item.Header>
                  <Item.Meta>
                    <span className="cinema">Union Square 14</span>
                  </Item.Meta>
                  <Item.Description>{paragraph}</Item.Description>
                  <Item.Extra>
                    <Label>IMAX</Label>
                    <Label icon="globe" content="Additional Languages" />
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <Item.Content>
                  <Item.Header as="a">My Neighbor Totoro</Item.Header>
                  <Item.Meta>
                    <span className="cinema">IFC Cinema</span>
                  </Item.Meta>
                  <Item.Description>{paragraph}</Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                <Item.Content>
                  <Item.Header as="a">Watchmen</Item.Header>
                  <Item.Meta>
                    <span className="cinema">IFC</span>
                  </Item.Meta>
                  <Item.Description>{paragraph}</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>

        <Grid.Column computer={5}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h4" attached="top">
                  <Icon name="plug" />
                  <Header.Content>Uptime Guarantee</Header.Content>
                </Header>

                <Segment attached>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
                        <List.Description as="a">Updated 10 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
                        <List.Description as="a">Updated 22 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
                        <List.Description as="a">Updated 34 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h4" attached="top">
                  <Icon name="plug" />
                  <Header.Content>Uptime Guarantee</Header.Content>
                </Header>

                <Segment attached>
                  <List divided relaxed>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
                        <List.Description as="a">Updated 10 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
                        <List.Description as="a">Updated 22 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="github" size="large" verticalAlign="middle" />
                      <List.Content>
                        <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
                        <List.Description as="a">Updated 34 mins ago</List.Description>
                      </List.Content>
                    </List.Item>
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
