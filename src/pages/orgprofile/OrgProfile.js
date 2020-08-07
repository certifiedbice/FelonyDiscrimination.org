import React,{Component} from 'react'
import OrgApiService from '../../services/org-api-service';
import OrgEndorsements from '../../components/orgendorsements/OrgEndorsements';
import OrgComments from '../../components/orgcomments/OrgComments';
import './OrgProfile.css';

export default class OrgProfile extends Component{
    state={org:{},setError:null}
    componentDidMount(){this.getOrg();}
    getOrg(){
        OrgApiService.getOrgById(this.props.match.params.orgId)
            .then(res=>this.setState({org:res}))
            .catch(this.state.setError);
    }
    render(){
        return(
            <section id='organization-profile'>
                <div>{this.state.org.org_name}</div>
                <div>{this.state.org.org_phone}</div>
                <div>{this.state.org.org_st_addr}</div>
                <div>{this.state.org.org_city}, {this.state.org.org_state} {this.state.org.org_zipcode}</div>
                <OrgEndorsements orgId={this.state.orgId}/>
                <OrgComments orgId={this.state.orgId}/>
            </section>
        );
	}
}