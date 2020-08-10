import React,{Component} from 'react'
import OrgApiService from '../../services/org-api-service';
import OrgEndorsementsForm from '../../components/orgendorsementsform/OrgEndorsementsForm';
import OrgComments from '../../components/orgcomments/OrgComments';
import './OrgProfile.css';

export default class OrgProfile extends Component{
    state={org:{},setError:null}
    componentDidMount(){
        this.getOrg();
    }
    getOrg(){
        OrgApiService.getOrgById(this.props.match.params.orgId)
            .then(res=>this.setState({org:res}))
            .catch(this.state.setError);
    }
    updateEndorsements=endorsement=>{
        console.log(endorsement)
        if(endorsement==1)this.setState({
            org:{
                id:this.state.org.id,
                org_name:this.state.org.org_name,
                org_phone:this.state.org.org_phone,
                org_st_addr:this.state.org.org_st_addr,
                org_city:this.state.org.org_city,
                org_state:this.state.org.org_state,
                org_zipcode:this.state.org.org_zipcode,
                org_type:this.state.org.org_type,
                pos_endorsements:parseInt(this.state.org.pos_endorsements)+1,
                neg_endorsements:this.state.org.neg_endorsements
            },setError:null
        })
        else this.setState({
            org:{
                id:this.state.org.id,
                org_name:this.state.org.org_name,
                org_phone:this.state.org.org_phone,
                org_st_addr:this.state.org.org_st_addr,
                org_city:this.state.org.org_city,
                org_state:this.state.org.org_state,
                org_zipcode:this.state.org.org_zipcode,
                org_type:this.state.org.org_type,
                pos_endorsements:this.state.org.pos_endorsements,
                neg_endorsements:parseInt(this.state.org.neg_endorsements)+1
            },setError:null
        })
    }
    render(){
        
        return(
            <section id='organization-profile'>
                <div id='org-info-container'>
                    <div id='org-name' className='org-info'><h2>{this.state.org.org_name}</h2></div>
                    <div id='org-phone' className='org-info'>
                        <h3>Phone:</h3> 
                        <p><a href={`tel:${this.state.org.org_phone}`}>{this.state.org.org_phone}</a></p>
                    </div>
                    <div id='org-address' className='org-info'>
                        <h3>Address:</h3>                    
                        <p>{this.state.org.org_st_addr}</p>
                        <p>{this.state.org.org_city}, {this.state.org.org_state} {this.state.org.org_zipcode}</p>
                    </div>
                </div>
                <div id='endorsements-info-container'>
                    <div id='pos-endorsement-sum' className='endorsements-info'>{this.state.org.pos_endorsements}</div>
                    <div id='pos-endorsement' className='endorsements-info'></div>
                    <div id='neg-endorsement' className='endorsements-info'></div>
                    <div id='neg-endorsement-sum' className='endorsements-info'>{this.state.org.neg_endorsements}</div>
                </div>
                <OrgEndorsementsForm orgId={this.state.org.id} updateEndorsements={this.updateEndorsements}/>
                <div className="organization-comments-container">

                </div>
                <OrgComments orgId={this.state.org.id}/>
            </section>
        );
	}
}